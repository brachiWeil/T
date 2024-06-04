import LinkModel from "../Models/LinkModel.js";
const LinksController = {
  getLinks: async (req, res) => {
    try {
      const links = await LinkModel.find();
      res.json(links);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  redirect: async (req, res) => {
    try {
      const link = await LinkModel.findById(req.params.id);

      if (!link) {
        return res.status(404).json({ message: 'Link not found' });
      }
      const targetParamValue = req.query[link.targetParamName] || "";
      const click = {
        insertedAt: new Date(),
        ipAddress: req.ip,
        targetParamValue: targetParamValue
      };
      link.clicks.push(click);
      await link.save();
      res.redirect(link.originalUrl);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  add: async (req, res) => {
    try {
      const link = new LinkModel(req.body);
      const savedLink = await link.save();
      res.json(savedLink);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getLinkClicksBySource: async (req, res) => {
    try {
      const link = await LinkModel.findById(req.params.id);
      if (!link) {
        return res.status(404).json({ message: 'Link not found' });
      }
      const clicks = link.clicks;
      const clicksBySource = {};
      link.targetValues.forEach((source) => {
        clicksBySource[source.name] = clicks.filter((click) => click.targetParamValue === source.value).length;
      });
      res.status(200).json(clicksBySource);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedTask = await LinkModel.findByIdAndUpdate(id, req.body, { new: true });//עדכון לפי מזהה
      res.json(updatedTask);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await LinkModel.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default LinksController;

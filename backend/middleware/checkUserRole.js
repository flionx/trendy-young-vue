export const adminCheck = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acces error' });
    }
    next();
};
const checkIsAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(401).json({ message: 'Acces error' });
    }
    next();
};
export default checkIsAdmin;
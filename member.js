function skillsMember (req, res) {
    res.render('skills/member', {
        title: 'Skills',
        user: req.user
    });
}
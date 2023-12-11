
export async function GetLogin(req, res) {
    try {
        res.render('Login');
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
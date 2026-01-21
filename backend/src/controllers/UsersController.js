class UsersController{

    index(req,res){
        return res.send('Users Controller is working');
    }

    show(req,res){
        res.send('Show user '+ req.params.id);

    }

    insert(req,res){
        res.send('Insert User');

    }
    update(req,res){
        res.send('Update user '+ req.params.id);

    }

    delete(req,res){
        res.send('Delete user '+ req.params.id);
    }
}

export default UsersController;
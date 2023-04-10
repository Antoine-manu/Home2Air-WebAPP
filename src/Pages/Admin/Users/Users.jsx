export default function AdminUsers() {


    return(
        <>
            <div>
                <h1>Utilisateurs</h1>
                <a href="#" className="btn btn-primary">Créer un utilsateur</a>
            </div>
            <div className="datatable">
                <div className="datatable_search">
                    <input className="form-control" type="text" placeholder="Rechercher un utilisateur"/>
                    <div>
                        <span>Filtrer par :</span>
                        <select name="" id="" className="form-control">
                            <option value="" selected>Id</option>
                        </select>
                    </div>
                </div>
                <div className="datatable_table">
                    
                </div>
            </div>
        </>
    )   
}
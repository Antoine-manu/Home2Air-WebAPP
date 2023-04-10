export default function Profil() {

    const user = {
        "name" : 'Antoine',
        "surname" : "Gaudry"
    }

    return(
        <>
            <div className="profil">
                <a href="" className="btn btn-primary">test</a>
                <h1>Mon profil</h1>
                <div className="profil__form">
                    <div className="form-layout-mid">
                        <div>
                            <img className="rounded" src={process.env.PUBLIC_URL + '/img/dd.jpg'} alt="" />
                            <div>
                                <a href=""></a>
                                <a href=""></a>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name">Prénom</label>
                            <input type="text" className="form-control" id="name" placeholder="Théo"/>
                        </div>
                        <div className="form-group">
                            <label for="surname">Nom</label>
                            <input type="text" className="form-control" id="surname" placeholder="Nom"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Mot de passe</label>
                            <input type="password" className="form-control" id="password" placeholder="********"/>
                        </div>
                    </div>
                    <div className="form-layout-mid">
                        <div className="form-group">
                            <label for="nameownercompany">Prénom</label>
                            <input type="text" className="form-control" id="nameownercompany" placeholder="Théo"/>
                        </div>
                        <div className="form-group">
                            <label for="surnameownercompany">Nom</label>
                            <input type="text" className="form-control" id="surnameownercompany" placeholder="Nom"/>
                        </div>
                        <div className="form-group">
                            <label for="adresse">Adresse</label>
                            <input type="text" className="form-control" id="adresse" placeholder="186 rue saint fuscien"/>
                        </div>
                        <div className="row">
                            <div className="form-group col-8">
                                <label for="city">Ville</label>
                                <input type="text" className="form-control" id="city" placeholder="Amiens"/>
                            </div>
                            <div className="form-group col-4">
                                <label for="postalCode">Code postal</label>
                                <input type="number" className="form-control" id="postalCode" placeholder="80000"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="adresse">Nom de la société</label>
                            <input type="text" className="form-control" id="companyname" placeholder="Test"/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Numéro de telephone</label>
                            <input type="number" className="form-control" id="phone" placeholder="0654343212"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}
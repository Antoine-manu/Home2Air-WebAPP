import {NavLink, useNavigation, useParams} from "react-router-dom";
import image from '../../assets/img/invite.jpg'
import logo from '../../assets/img/logo_blanc.png'
import bg from '../../assets/img/bginvite.jpg'
import {fetchRoute} from "../../Utils/auth";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Invite() {
    const params = useParams()
    const InviteId = params.id
    const tokenInvite = params.token
    const [invite, setInvite] = useState(null);
    const [token, setToken] = useState(
        localStorage.getItem('token') ? localStorage.getItem('token') : ''
    );
    const navigation = useNavigation()
    const getInvite = async () => {
        const response = await fetchRoute('invite/find-by-id', 'post', {id : parseInt(InviteId)}, token);
        if(response != null){
            setInvite(response)
        }
    };

    const accept = async () => {
        const response = await fetchRoute(`invite/accept`, 'post', {id : InviteId}, token);
        if(response != null){
            window.location.href = `/space/${invite.Place.id}`
        }
    };

    useEffect(() => {
        getInvite();
    }, []);

    useEffect(() => {
        if(invite != null){
            console.log(invite)
            if(invite.isAccpected == true){
                window.location.href = `/space/${invite.Place.id}`
            }
        }
    }, [invite]);

    return (
        <div className="invite">
            <img src={logo} alt="" className="mt-4 invite_logo"/>
            {invite != null ?
                <div className='invite_content mt-4'>
                    <span className='fw-bold' style={{fontSize: '20px'}}>Vous avez accepté la demande d'invitation !</span>
                    <span className=' mb-3 text-secondary'>Vous pouvez desormais acceder a l'espace {invite.Place.name} qui vous a été partagé {invite.From.first_name} {invite.From.last_name}.</span>
                    <button className='btn btn-primary' onClick={accept}>
                        Acceder a l'espace
                    </button>
                </div>
                : ''}
        </div>
    );
}

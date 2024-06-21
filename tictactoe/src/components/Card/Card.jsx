import Icon from '../Icon/Icon';

function Card({player}){

    let icon=<Icon />  //nothing then icon of pencil will be there
    if(player=='X'){
        icon = <Icon name="cross"/>

    }
    else if(player=='O'){
        icon=<Icon name="circle"/>

    }

    return(

        <div className='card'>
            {icon}
        </div>
        
    )
}

export default Card;
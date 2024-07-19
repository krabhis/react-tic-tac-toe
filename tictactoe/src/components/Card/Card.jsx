import Icon from '../Icon/Icon';

function Card({player, onPlay , index}){

    let icon=<Icon />  //nothing then icon of pencil will be there
    if(player=='X'){
        icon = <Icon name="cross"/>

    }
    else if(player=='O'){
        icon=<Icon name="circle"/>

    }

    return(

        <div className='size-24 border-2 p-6 text-2xl bg-orange-300 rounded-md m-1' onClick={()=>onPlay(index)} >
            {icon}
        </div> 
        
    )
}

export default Card;



export type TMaquetteObject = {
    titre           : string ,
    id          ?   : string ,
    color       ?   : string ,
    description ?   : string ,
    children    ?   : TMaquetteObject[]
    liens       ?   : {
        url : string,
        titre : string
    }[]
}

export function InfoBox(props : {data : TMaquetteObject}){

    const childrens = props.data.children?.map(
        (item,i) => <InfoBox key={i} data={item}/>
    ) 
    const links = props.data.liens?.map(
        (item,i) => <a key={i} href={item.url}>{item.titre}</a>
    ) 
    links?.unshift(<p>Liens : </p>)

    return (
        <div id={props.data.id} className={(props.data.color || "gris") + ' bordered'}>
            <details open={true}>
                <summary>{props.data.titre}</summary>
                <div>
                    <p>{props.data.description}</p>
                </div>
                <div className="block">
                    {links}
                </div>
                <div className="flex">
                    {childrens}
                </div>
            </details>
        </div>
    )
}
import Card from '../../components/Card/Card'
import textData from '../../data/textData.json'

export default function Main() {
    return (
        <>
            {    
            textData.map((item, index) => (
                <Card item={item} key={index} />
            ))
            }
        </>
    )
}
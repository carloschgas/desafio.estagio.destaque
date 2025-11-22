import type { LanguageDataProp } from '../../types/LanguageDataProp'
import Row from './Row/Row'

type GraphicProps = {
    languageData: LanguageDataProp[];
}

export default function MobileLanguageGraphic({languageData} : GraphicProps){

    return (
        <ul>

            {languageData.map((language) => (

                <Row 
                languageName={language.name}
                value = {language.value}
                maxValue={100}
                />
            ))}
        </ul>
    )
}


import Navbar from "../components/Navbar"


export default function Impressum() {

    return (
        <>
            <Navbar/>

            <div className='site'>
                <h1 style={{ marginBottom: '20px', marginTop: '125px' }}>
                    Impressum
                </h1>

                <p className='impressum'>
                    Zum Sch'tis<br/><br/>

                    Kekkusstraße 21<br/>
                    00001 Wolkenhausen<br/>
                    Deutschland<br/><br/>

                    support@zum-schtis.com<br/>
                    Tel. 0187 420 21 420<br/>

                    Ust Nr. DE420 187049<br/><br/>

                    Vertretungsberechtigter Vorstand: Maxelina Musterfrau

                </p>
            </div>

        </>
    )

}

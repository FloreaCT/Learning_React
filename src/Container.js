import React, {Fragment, useState} from 'react';
import Header from './Header'
import Section from './Section';
import List from './List';
import AnotherForm from './AnotherForm';
import './css/records.scss'


const recordsData = []

const Container = () =>{

    const [records, setRecords] = useState(recordsData)

    const [liveText, setLiveText] = useState('')

    const onSubmitHandler = entry => {
        setRecords([...records, entry].sort((a,b)=>{
            if(a.recordName < b.recordName){
                return -1
            }
            if(a.recordName > b.recordName){
                return 1
            }
            return 0
        }))
        setLiveText(`${entry.recordName} successfully added.`)
    }

    return <Fragment><Header />
        <main>
            <Section headingText="Add a new favourite">
                <AnotherForm onSubmit={onSubmitHandler} />
            </Section>
            <Section headingText="Records">
                <List records={records} />
            </Section>
        </main>
        <div aria-live="polite" aria-atomic="true" className="visually-hidden">{liveText}</div>
    </Fragment>
}
export default Container
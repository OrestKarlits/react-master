import React, {useState} from 'react';

const Forms = ({getfilter}) => {
    const [form, setform] = useState({name:'', username:'', email:''});

    const formHandler = (e) => {
    const eventdata = {...form, [e.target.name]:e.target.value}
        setform({...form, ...eventdata})
    }

    const onsubmit = (e) => {
    e.preventDefault()
        getfilter(form)
    }

    return (
        <div>
        <form>
            <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler} /></label>
            <label>UserName: <input type="text" name={'username'} value={form.username} onChange={formHandler} /></label>
            <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler} /></label>
            <button onClick={onsubmit}>Filter</button>
        </form>

        </div>
    );
};

export default Forms;
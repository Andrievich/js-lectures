import React, { useState } from "react";
import './formStyle.css';
export const Form = () => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        message: '',
    })

    const handleForm = (event:any) => {
        const field = event.target.id;
        setForm({
            ...form,
            [field]:event.target.value
        })
    }

    const HandleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(form)
    }

    return (
        <form className="form" action="" onSubmit={HandleSubmit} name="section__form" method="POST">
            <div className="form__wrapper">
                <div className="form__content">
                    <div className="form__item">
                        <label className="form__label" htmlFor="name">Name</label>
                        <input className="form__input" type="text" required id="name" onChange={handleForm}/>
                    </div>
                    <div className="form__item">
                        <label className="form__label" htmlFor="surname">Surname</label>
                        <input className="form__input" type="text" required id="surname" onChange={handleForm}/>
                    </div>
                    <div className="form__item">
                        <label className="form__label" htmlFor="email">Email</label>
                        <input className="form__input" type="email" required id="email" onChange={handleForm}/>
                    </div>
                    <div className="form__item">
                        <label className="form__label" htmlFor="password">Password</label>
                        <input className="form__input" type="password" required id="password" onChange={handleForm}/>
                    </div>
                </div>
                <div className="form__content">
                    <div className="form__message">
                        <label className="form__message-label" htmlFor="message">Message</label>
                        <textarea className="form__textarea" name="contact__textarea" maxLength={100} id="message" onChange={handleForm}></textarea>
                    </div>
                </div>
            </div>
            <button className="form__button">Send Message</button>
        </form>
    )
}
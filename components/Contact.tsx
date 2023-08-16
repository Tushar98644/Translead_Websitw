/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useState } from 'react';
import Map from './Map'
import Image from 'next/image'

const Contact = () => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Send");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);


    return (
        <Fragment>
            <div className="md:pt-36 pt-24 flex flex-col sm:mx-10 mx-6 gap-4">
                <div className="flex md:flex-row flex-col md:gap-20 gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="sm:font-extrabold font-bold text-4xl  flex justify-start">
                            Contact
                        </div>
                        <div className="text-xl font-normal mt-2">
                            For any inquiries about us and the work we do, please use the form on the right and drop a note to us. We will be sure to get back to you as soon as we can.
                        </div>
                        <div>
                            <Image src='/contact/contact.gif' alt='image' height={500} width={500} />
                        </div>
                    </div>
                    <div className='w-full'>
                        <form onSubmit={() => console.log('hello')}>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-3 w-full text-base bg-[#F5F5F7] border border-[#64AFAC]  rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-3 w-full text-black bg-[#F5F5F7] border border-[#64AFAC]  rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-3 w-full text-black bg-[#F5F5F7] border border-[#64AFAC]  rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Email " required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-3 w-full text-black bg-[#F5F5F7] border border-[#64AFAC] rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    onChange={(e) => setSubject(e.target.value)} placeholder="Subject " required />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <textarea className="block py-2.5 px-3 w-full text-black bg-[#F5F5F7] border border-[#64AFAC]  rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder="Write your message here" onChange={(e) => setMessage(e.target.value)} rows={6} required />
                            </div>
                            <div className='w-full flex justify-center'>
                                <button type="submit" className="block py-2 px-8 font-bold text-white border-none rounded-xl bg-[#FB1010] shadow-xl focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                >Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
                <Image src='/website.png' alt='image' height={1300} width={1300} className='absolute opacity-40 -z-10 mx-0 md:top-[590px] top-[870px] rotate-180 w-full left-0' />
                <div className="flex md:flex-row md:gap-20 gap-6 flex-col mt-10 ">
                    <div className="flex flex-col gap-2">
                        <div className=" font-black text-4xl flex justify-start">
                            Our offices
                        </div>
                        <div className="text-xl font-medium mt-12 mb-1">
                            BANGALORE , INDIA
                        </div>
                        <div className="text-lg font-light">
                            Translead Medtech Pvt Ltd,Incubated @ CPDMED TBI,MedTech & Geriatric Healthcare Technology Business Incubator @ Centre for Product Design & Manufacturing (CPDM),Raman Building,Indian Institute of Science (IISc),Bangalore-560012,Karnataka
                        </div>
                    </div>
                    <div className='w-[90vw] h-[50vw] md:h-[30vw] md:w-[150vw]'>
                        <Map />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;
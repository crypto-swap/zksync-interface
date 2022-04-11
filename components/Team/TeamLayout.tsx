import React from 'react'
import SingleTeamMember from './SingleTeamMember';

const TeamLayout = () => {

    return (
        <div className="text-text-light dark:text-text-dark ">
            <div className="mb-[27px] pt-[100px] text-5xl font-bold text-center">The Team</div>

            <div className="relative z-10 mx-auto mt-16 px-20 h-auto w-full p-20 pt-5 max-w-sm md:max-w-5xl">
                <div className='grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-10'>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Tiger" title="Developer" text="Caltech '25" photo="/team/tiger.jpg"/>
                    </div>
                    
                    
                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Calvin" title="Developer" text="Caltech '25" photo="/team/calvin.png"/>
                    </div>


                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Hamza" title="Marketing" text="UCLA '23" photo="/team/hamza.jpeg"/>
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Nathan" title="Founder/Intern" text="Decentralized finance
                        will enable the most efficient economy in the history of civilation. As each event will have roughly
                        measurable impact, entropy will be normalized for all." 
                        photo="/team/nathan.gif"/>
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Qianli" title="Developer" text="UCLA '24 " photo="/team/qianli.png"/>
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Katie" title="UX/UI/Front-End Intern" text="UCI '25" photo="/team/katie.png"/>
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Botao" title="Developer" text="UCLA 24'" photo="/team/botao.jpg"/>
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Annie" title="Front-End Intern" text="UCI '25" photo="/team/annie.jpg"/>
                    </div>

                    
                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Austin" title="Business Development" text="UCLA 24'" photo="/team/austin.jpeg"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamLayout;

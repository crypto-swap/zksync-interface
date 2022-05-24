import React from 'react'
import SingleTeamMember from './SingleTeamMember';

const TeamLayout = () => {

    return (
        <div className="text-text-light dark:text-text-dark ">
            <div className="mb-[27px] pt-[100px] text-5xl font-bold text-center">The Team</div>

            <div className="relative z-10 mx-auto mt-16 px-20 h-auto w-full p-20 pt-5 max-w-sm md:max-w-5xl">
                <div className='grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-10'>


                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Calvin" title="Developer" text="Caltech CS" photo="/team-image/calvin.png" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Nathan" title="Developer (Manager)" text="UCLA Math-CS    Decentralized finance
                        will enable the most efficient economy in the history of civilation. As each event will have roughly
                        measurable impact, entropy will be normalized for all."
                            photo="/team-image/nathan.gif" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Phoebe" title="Business Relations" text="East Coast US, Employed Elsewhere..." photo="/team-image/phoebe.jpg" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Botao" title="Developer" text="UCLA CS" photo="/team-image/botao.jpg" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Anonymous ZK" title="Smart Contract Dev" text="somewhere in LA..." photo="/team-image/anonymous_dev.png" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Monke" title="Digital Marketing" text="McDonalds" photo="/team-image/jason.png" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Hamza" title="Marketing" text="UCLA Communications" photo="/team-image/hamza.jpeg" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Batman" title="Digital Graphics" text="UCSD ICAM" photo="/team-image/batman.png" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Katie" title="Digital Artist" text="UCI" photo="/team-image/katie.png" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamLayout;

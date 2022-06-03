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
                        <SingleTeamMember name="Nathan" title="Developer / insert_title" text="UCLA Math-CS    Decentralized finance
                        will enable the most efficient economy in the history of civilation. As each event will have roughly
                        measurable impact, entropy will be normalized for all."
                            photo="/team-image/nathan.gif" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Anonymous ZK" title="Smart Contract Dev" text="somewhere in LA..." photo="/team-image/anonymous_dev.png" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Batman" title="Digital Graphics" text="UCSD ICAM" photo="/team-image/batman.png" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Katie" title="Digital Artist" text="UCI" photo="/team-image/katie.png" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Bobby" title="Developer" text="no data" photo="/team-image/botao.jpg" />
                    </div>

                    <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-2xl shadow-card dark:shadow-card-dark">
                        <SingleTeamMember name="Peter" title="Developer" text="no data" photo="/team-image/qianli.png" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamLayout;

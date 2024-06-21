import React from 'react';
import MemberCard from './MemberCard';
import '../../../public/styles/team.css'

export default function TeamMembers() {
    const team_members = Array.from({ length: 12 }, (_, index) => index);
    return (
        <div className="team-members-container">
            <h2>Team Members</h2>
            <div className="team-members-box">
                {team_members.map((i, index) => (
                    <MemberCard key={index} />
                ))}
            </div>
        </div>
    );
}

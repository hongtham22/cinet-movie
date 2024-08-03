import { useEffect } from 'react';
import './VoteInfo.css'

const VoteInfo = () => {
    useEffect(() => {
        const canvas = document.getElementById('voteCanvas');
        const ctx = canvas.getContext('2d');
        const percentage = 85; // 85% for 8.5 rating
        const startAngle = -0.5 * Math.PI;
        const endAngle = (percentage / 100) * 2 * Math.PI + startAngle;

        // Draw the background circle (100%)
        ctx.beginPath();
        ctx.arc(30, 30, 25, 0, 2 * Math.PI);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#3f6e4f'; // Dark blue
        ctx.stroke();

        // Draw the foreground circle (85%)
        ctx.beginPath();
        ctx.arc(30, 30, 25, startAngle, endAngle);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#50e281'; // Light blue
        ctx.stroke();
    }, []);

    return (
        <div className="vote-info">
            <div className="point-vote">
                <div className="circle">
                    <div className="chart">
                        <canvas id="voteCanvas" width="68" height="68"></canvas>
                        <h3 className="point-number">8.5</h3>
                    </div>
                </div>
            </div>
            <h2 className="count-vote">Vote count: 500</h2>
        </div>
    );
};

export default VoteInfo;
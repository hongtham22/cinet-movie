import { useEffect } from 'react';
import './VoteInfo.css';
import PropTypes from 'prop-types';

const VoteInfo = ({ point }) => {
  useEffect(() => {
    const canvas = document.getElementById('voteCanvas');
    const ctx = canvas.getContext('2d');

    // Set higher resolution
    const size = 120; // This size is double the CSS size for better resolution
    canvas.width = size;
    canvas.height = size;

    // Adjust styles using CSS
    canvas.style.width = '60px';
    canvas.style.height = '60px';

    const radius = 50; // Increase radius due to higher resolution
    const percentage = point * 10; // Convert point to percentage
    const startAngle = -0.5 * Math.PI;
    const endAngle = (percentage / 100) * 2 * Math.PI + startAngle;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background circle (100%)
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 8; // Increase line width due to higher resolution
    ctx.strokeStyle = '#3f6e4f'; // Dark blue
    ctx.stroke();

    // Set stroke color based on the point value
    const strokeColor = point < 8.0 ? '#f7c32e' : '#50e281'; // Yellow if < 8.0, else light blue

    // Draw the foreground circle (percentage)
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, radius, startAngle, endAngle);
    ctx.lineWidth = 8;
    ctx.strokeStyle = strokeColor;
    ctx.lineCap = 'round';
    ctx.stroke();
  }, [point]); // Re-render when point changes

  return (
    <div className="point-vote">
      <div className="circle">
        <div className="chart">
          <canvas id="voteCanvas"></canvas>
          <h3 className="point-number">
            {point}
            <span className="decimal">/10</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

VoteInfo.propTypes = {
  point: PropTypes.number.isRequired, // Ensure point is a required prop
};

export default VoteInfo;

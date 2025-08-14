import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AiOutlineFolder, AiOutlineDownload } from "react-icons/ai";
import './Achievement.css'

function AchievementCard({id, title, details, date, field, image}) {
    const { theme } = useContext(ThemeContext);
    const [imageError, setImageError] = useState(false);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor: theme.primary30,
            transition: 'all 0.3s ease-in-out',
            "&:hover": {
                backgroundColor: theme.primary50,
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            },
        },
        downloadButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '12px',
            backgroundColor: theme.primary,
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: 'none',
            width: 'fit-content',
            marginTop: '0.5rem',
            '&:hover': {
                backgroundColor: theme.primaryDark,
                transform: 'scale(1.05)',
            }
        }
    }));

    const classes = useStyles();

    const handleDownload = async () => {
        try {
            const response = await fetch(field);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${title.replace(/\s+/g, '_')}_Certificate.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading certificate:', error);
            // Open in new tab as fallback
            window.open(field, '_blank');
        }
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color: theme.primary}}>
                        <h5>{date}</h5>
                        <button 
                            onClick={handleDownload}
                            className={classes.downloadButton}
                        >
                            <AiOutlineDownload />
                            Download Certificate
                        </button>
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    {!imageError ? (
                        <img 
                            src={image} 
                            alt={title} 
                            onError={handleImageError}
                        />
                    ) : (
                        <div style={{
                            color: theme.tertiary, 
                            textAlign: 'center',
                            padding: '20px'
                        }}>
                            Image not available
                        </div>
                    )}
                </div>
           </div>
        </Fade>
    )
}

export default AchievementCard

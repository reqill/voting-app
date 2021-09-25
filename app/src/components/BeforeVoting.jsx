import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import "../styles/App.css"

const BeforeVoting = ({ colors, changeCard }) => {
    const endDate = 1633384799000;
    const voteCount = 69;
    const mostVotesClass = "3Bg"


    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>Zakończono głosowanie!</span>;
        } else {
            return (
                <p>
                    <span className="time-number" style={{ color: colors.primary }}>{days}</span>
                    <span className="time-label" style={{ color: colors.description }}>dni</span>&nbsp;&nbsp;
                    <span className="time-number" style={{ color: colors.primary }}>{hours}</span>
                    <span className="time-label" style={{ color: colors.description }}>godzin</span>&nbsp;&nbsp;
                    <span className="time-number" style={{ color: colors.primary }}>{minutes}</span>
                    <span className="time-label" style={{ color: colors.description }}>minut</span>&nbsp;&nbsp;
                    <span className="time-number" style={{ color: colors.primary }}>{seconds}</span>
                    <span className="time-label" style={{ color: colors.description }}>sekund</span>
                </p>
            );
        }
    };

    const _handleLogIn = () => {

    }

    return (
        <div className="center" style={{ width: "100%", maxWidth: "100%", marginBottom: "5px" }}>
            <div className="voting-info center">
                <div className="voting-spec-info center">
                    {/* <h3 style={{ color: colors.header }} style={{ margin: 0, padding: 0 }}>
                        Głosowanie otwarte!
                    </h3> */}
                    <h4 style={{ color: colors.primary }}>
                        <span style={{ color: colors.description }}>oddano </span>{voteCount}&nbsp;<span style={{ color: colors.description }}>głosów łącznie,</span>
                    </h4>
                    <h4 style={{ color: colors.primary }}>
                        <span style={{ color: colors.description }}>a </span>{mostVotesClass}&nbsp;<span style={{ color: colors.description }}>to klasa z najwyższą frekwencją</span>
                    </h4>
                </div>
                <button
                    className="vote-btn"
                    onClick={() => _handleLogIn}
                    style={{ backgroundColor: colors.primary, color: 'white' }}
                >
                    <p className="btn-label">Zagłosuj!</p>
                </button>
                <p className="warning" style={{ color: "tomato" }}>Aby wziąć udział w głosowaniu <b>musisz</b> zalogować się poprzez <b>maila szkolnego</b></p>
            </div>
            <p className="countdown-label" style={{ color: colors.header }}>Do zakończenia głosowania pozostało:</p>
            <Countdown
                date={endDate}
                renderer={renderer}
                onComplete={() => changeCard("after-time")}
            />
        </div>
    )
}

export default BeforeVoting;
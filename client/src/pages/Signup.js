import React from 'react';

const Signup = () => {
    return (
        <div>
            <h2>Signup</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;

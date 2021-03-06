import React from 'react';

const AddPlayerForm = ({ addPlayer }) => {

    const playerInput = React.createRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }

        return(
             <form onSubmit={handleSubmit}> 
             {/* will submit upon hitting enter or the button */}
                <input 
                    type="text"
                    ref={playerInput}
                    placeholder="Enter a player here"
                />

                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
}

export default AddPlayerForm
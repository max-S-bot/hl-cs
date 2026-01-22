NUM_TRIES = 7
A = ord('a')

class game:
    def __init__(self):
        self.num_tries = NUM_TRIES
        self.word = get_word() # fix
        self.n = len(self.word)
        self.guesses = []
        self.state = list(map(lambda ch: '_', list(word)))
        self.remaining_letters = []
        for i in range(26):
            remaining_letters.append(chr(a+i))

    def play():
        while num_tries > 0 and '_' in state:
            self.do_turn()
        if '_' in state:
            print('Not quite! The answer was {self.word}')
        else:
            print('Good work!')
        print()

    def do_turn():
        print('So far: ' + str(self.state))
        print('Guesses remaining: '+ str(self.num_tries))
        print('Guesses so far: ' + str(self.guesses))
        print('Remaining letters: ' + str(self.remaining_letters))
        guess = input('Make a guess: ').lower()
        print()
        matched = False
        for i in range(self.n):
            if guess == word[n]:
                matched = True
                state
        if not matched:
            self.num_tries -= 1
        del self.remaining_letters[self.remaining_letters.index(guess)]
        guesses.append(guess)

while True:
    play = input('Play? (y/n)').lower()
    if play == 'n':
        print('Thanks for playing!')
        break
    else:
        game().play()


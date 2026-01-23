import random

NUM_TRIES = 7
A = ord('a')
WORDS = ['apple', 'orange', 'stuff', 'foo', 'bar']

class game:
    def __init__(self):
        self.num_tries = NUM_TRIES
        self.word = WORDS[int(len(WORDS) * random.random())] #get_word() # fix
        self.n = len(self.word)
        self.guesses = []
        self.state = list(map(lambda ch: '_', list(self.word)))
        self.remaining_letters = []
        for i in range(26):
            self.remaining_letters.append(chr(A+i))

    def play(self):
        while self.num_tries > 0 and '_' in self.state:
            self.do_turn()
        print(self.state)
        print(f'The word was \'{self.word}\'')
        if '_' in self.state:
            print('Not quite!')
        else:
            print('Good work!')
        print()

    def do_turn(self):
        print('So far: ' + str(self.state))
        print('Guesses remaining: '+ str(self.num_tries))
        print('Guesses so far: ' + str(self.guesses))
        print('Remaining letters: ' + str(self.remaining_letters))
        guess = input('Make a guess: ').lower()
        print()
        if guess not in self.remaining_letters:
            print('Not a valid guess. Try again!')
            self.do_turn()
            return
        matched = False
        for i in range(self.n):
            if guess == self.word[i]:
                matched = True
                self.state[i] = self.word[i]
        if not matched:
            self.num_tries -= 1
        del self.remaining_letters[self.remaining_letters.index(guess)]
        self.guesses.append(guess)

while True:
    print()
    game().play()
    print()
    if input('Play again? (y/n) ').lower() == 'n':
        print('Thanks for playing!')
        break
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


const threeLanguages = users.filter ((user,index,array) =>   {

    // return true or false condition
    return user.languages.length >= 3;
});
console.log(threeLanguages)


// 3. Use .map to create an array of strings where each element is a user's email address.

const userEmails = users.map((user) => {

    return user.email;
});

console.log(userEmails)


// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((accumulator,user) => {
    return accumulator + user.yearsOfExperience;

}, 0);  // zero is what the accumulator starts as

const averageYears = totalYears / users.length;
console.log(totalYears)
console.log(averageYears)


// 5. Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((accumulator, user, index, array) => {
    console.log(accumulator)
    if (accumulator.length < user.email.length) {
        return user.email;
    } else {
        return accumulator;
    }


}, users[0].email ); // start with first users email to compare

console.log(longestEmail)


// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const usersString = users.reduce((accumulator, user, index) => {
    console.log(accumulator)

    return accumulator + ", " + user.name;

}, "");

console.log(usersString)


// BONUS -  Use .reduce to get the unique list of languages from the list of users.

// for this, we can use the Set in JS. when you use .add with set, if the element is already has it, it wont be added.

const languagesKnown = users.reduce((accumulator, user) => {
    accumulator.push(user)

})
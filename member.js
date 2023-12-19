function skillsMember(）{
    var skills = ['JavaScript', 'HTML', 'CSS'];
    var member = {
        name: '山田太郎',
        birth: new Date(1970, 5, 25),
        toString: function() {
            return this.name + ' / 誕生日: ' + this.birth.toLocaleDateString();
        },
        skills: skills
    };
    console.log(member.skills[1]); // 結果: HTML
    console.log(member['skills'][1]); // 結果: HTML
    console.log(member.skills.length); // 結果: 3
    console.log(member['skills'].length); // 結果: 3
    console.log(member.toString()); // 結果: 山田太郎 / 誕生日: 1970/6/25
    console.log(member['toString']()); // 結果: 山田太郎 / 誕生日: 1970/6/25
}
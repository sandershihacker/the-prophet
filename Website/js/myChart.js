new Chartist.Line('#chart-pressure', {
    labels: ['12:00AM', '4:00AM', '8:00AM', '12:00PM', '4:00PM', '8:00PM'],
    series:[[10, 10, 20, 30, 50, 80]]
});
new Chartist.Line('#chart-temperature', {
    labels: ['12:00AM', '4:00AM', '8:00AM', '12:00PM', '4:00PM', '8:00PM'],
    series:[[22, 16, 18, 28, 26, 23]]
});
new Chartist.Line('#chart-humidity', {
    labels: ['12:00AM', '4:00AM', '8:00AM', '12:00PM', '4:00PM', '8:00PM'],
    series:[[21, 32, 56, 43, 78, 43]]
});

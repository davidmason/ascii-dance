var tape = require('tape'),
    dancer = require('..'),
    shruggies = require('../shruggies'),
    shruggieDance = dancer(shruggies),
    kirbies = require('../kirbies'),
    kirbyDance = dancer(kirbies);

tape('kirby-dance', function (t) {
    t.test('works with a few normal numbers', function (t) {
        dance = kirbyDance(4);
        t.equal(dance, "<('.'<) (>'.')> <('.'<) (>'.')>");

        dance = kirbyDance(7);
        t.equal(dance, "<('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<)");

        dance = kirbyDance(12);
        t.equal(dance, "<('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')>");
        t.end();
    });

    t.test('works with zero', function (t) {
        dance = kirbyDance(0);
        t.equal(dance, "");
        t.end();
    });

    t.test('works with no argument', function (t) {
        dance = kirbyDance();
        t.equal(dance, "");
        t.end();
    });

    t.test('does not dance with not a number', function (t) {
        dance = kirbyDance('kirby');
        t.equal(dance, "");
        t.end();
    });

    t.test('reverses dance with negative numbers', function (t) {
        dance = kirbyDance(-4);
        t.equal(dance, "(>'.')> <('.'<) (>'.')> <('.'<)");

        dance = kirbyDance(-7);
        t.equal(dance, "(>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')>");

        dance = kirbyDance(-12);
        t.equal(dance, "(>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<)");
        t.end();
    });
    
    t.test('works with a different set of moves', function (t) {
        dance = shruggieDance(3);
        t.equal(dance, "¯\\_(ツ)_/¯ _/¯(ツ)¯\\_ ¯\\_(ツ)¯\\_");

        dance = shruggieDance(5);
        t.equal(dance, "¯\\_(ツ)_/¯ _/¯(ツ)¯\\_ ¯\\_(ツ)¯\\_ _/¯(ツ)_/¯ ¯\\_(ツ)_/¯");

        dance = shruggieDance(-5);
        t.equal(dance, "_/¯(ツ)_/¯ ¯\\_(ツ)¯\\_ _/¯(ツ)¯\\_ ¯\\_(ツ)_/¯ _/¯(ツ)_/¯");
        t.end();
    });
})

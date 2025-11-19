export default {
    extends: ['cmyr'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert',
            ],
        ],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'body-max-line-length': [0, 'never'],
    },
}

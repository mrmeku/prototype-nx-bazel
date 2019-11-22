load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary", "nodejs_test")

def ng(**kwargs):
    nodejs_binary(
        entry_point = "//:node_modules/@angular/cli/bin/ng",
        install_source_map_support = False,
        data = ["//:node_modules"] + kwargs.pop("data", []),
        **kwargs
    )

def ng_test(**kwargs):
    nodejs_test(
        entry_point = "//:node_modules/@angular/cli/bin/ng",
        install_source_map_support = False,
        data = ["//:node_modules"] + kwargs.pop("data", []),
        **kwargs
    )

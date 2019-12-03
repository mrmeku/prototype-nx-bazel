"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@nrwl/workspace/testing");
const testing_2 = require("../utils/testing");
const literals_1 = require("@angular-devkit/core/src/utils/literals");
describe('@nrwl/bazel:sync', () => {
    let tree;
    beforeEach(() => {
        tree = schematics_1.Tree.empty();
        tree = testing_1.createEmptyWorkspace(tree);
    });
    describe('WORKSPACE', () => {
        it('should be created', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield testing_2.runSchematic('sync', {}, tree);
            expect(result.exists('WORKSPACE')).toEqual(true);
        }));
        it('should name the workspace validly', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield testing_2.runSchematic('sync', {}, tree);
            const contents = literals_1.stripIndents `${result.readContent('WORKSPACE')}`;
            expect(contents).toContain('name = "test_name"');
        }));
        it('should import nodejs bazel rules', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield testing_2.runSchematic('sync', {}, tree);
            const contents = literals_1.stripIndents `${result.readContent('WORKSPACE')}`;
            expect(contents).toContain(literals_1.stripIndents `
        load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
        http_archive(
          name = "build_bazel_rules_nodejs",
          sha256 = "c612d6b76eaa17540e8b8c806e02701ed38891460f9ba3303f4424615437887a",
          urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.42.1/rules_nodejs-0.42.1.tar.gz"],
        )
      `);
        }));
        it('should import yarn bazel rules and install', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield testing_2.runSchematic('sync', {}, tree);
            const contents = literals_1.stripIndents `${result.readContent('WORKSPACE')}`;
            expect(contents).toContain(literals_1.stripIndents `
        load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")
        
        yarn_install(
          # Name this npm so that Bazel Label references look like @npm//package
          name = "npm",
          data = ["//patches"],
          package_json = "//:package.json",
          yarn_lock = "//:yarn.lock",
        )
        
        # Install any Bazel rules which were extracted earlier by the yarn_install rule.
        load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
        
        install_bazel_dependencies()
      `);
        }));
    });
    describe('root BUILD.bazel', () => {
        it('should be created', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield testing_2.runSchematic('sync', {}, tree);
            expect(result.exists('BUILD.bazel')).toEqual(true);
        }));
        it('should export root files', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield testing_2.runSchematic('sync', {}, tree);
            const contents = literals_1.stripIndents `${result.readContent('BUILD.bazel')}`;
            expect(contents).toContain(literals_1.stripIndents `exports_files(
           [
             "workspace.json",
             "package.json",
             "nx.json",
             "tsconfig.json",
             "tslint.json",
             
           ],
           visibility = ["//:__subpackages__"],
         )
      `);
        }));
    });
});

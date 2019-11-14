# Prototype for running NX with Bazel

The goal of this repo is to put together an example Nx workspace with the following operations supported

#### NX variants

- `nx build angularapp` ✅
- `nx build reactapp` ✅
- `nx e2e angularapp-e2e` ✅
- `nx e2e reactapp-e2e` ✅
- `nx test angularapp` ✅
- `nx test reactapp` ✅
- `nx test shared-lib` ✅
- `nx test shared-buildable-lib` ✅
- `nx build shared-buildable-lib` ✅
- `nx lint reactapp` ✅
- `nx lint angularapp` ✅
- `nx lint shared-lib` ✅
- `nx lint shared-buildable-lib` ✅

#### Bazel variants

- `bazel build apps/angularapp:build` ✅
- `bazel build apps/reactapp:build` ❌ (polyfills fail to build)
- `bazel test apps/angularapp-e2e:e2e` ❌
- `bazel test apps/reactapp-e2e:e2e` ❌
- `bazel build apps/angularapp:test` ❌
- `bazel build apps/reactapp:test` ❌
- `bazel build apps/shared:test-lib` ❌
- `bazel test libs/shared-lib:test` ❌
- `bazel test libs/shared-buildable-lib:test` ❌
- `bazel build libs/shared-buildable-lib:build` ❌
- `bazel build apps/reactapp:lint` ✅
- `bazel build apps/angularapp:lint` ✅
- `bazel build libs/shared-lib:lint` ✅
- `bazel build libs/shared-buildable-lib:lint` ✅

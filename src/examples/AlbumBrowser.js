import React from 'react';
import { Link } from 'react-router';
import ExampleViewer from './ExampleViewer';

import SimpleExample from './Simple/index';
import ManualRenderingExample from './ManualRendering/index';
import ClothExample from './AnimationCloth/index';
import GeometriesExample from './Geometries/index';
import CameraExample from './WebGLCameraExample/index';
import GeometryShapesExample from './GeometryShapes/index';
import DraggableCubes from './DraggableCubes/index';
import Physics from './Physics/index';
import PhysicsMousePick from './Physics/mousePick';
import BenchmarkRotatingCubes from './Benchmark/RotatingCubes';
import RotatingCubesDirectUpdates from './Benchmark/RotatingCubesDirectUpdates';
import EmpireSounds from './T2-EmpireSounds/index';
import Biomes from './T4-Biomes/index';

const examples = [
  {
    name: 'Simple',
    component: SimpleExample,
    url: 'Simple/index',
    slug: 'webgl_simple'
  },
  // {
  //   name: 'Cloth',
  //   component: ClothExample,
  //   url: 'AnimationCloth/index',
  //   slug: 'webgl_cloth'
  // },
  // {
  //   name: 'Camera',
  //   component: CameraExample,
  //   url: 'WebGLCameraExample/index',
  //   slug: 'webgl_camera'
  // },
  // {
  //   name: 'Geometries',
  //   component: GeometriesExample,
  //   url: 'Geometries/index',
  //   slug: 'webgl_geometries'
  // },
  // {
  //   name: 'Geometry Shapes',
  //   component: GeometryShapesExample,
  //   url: 'GeometryShapes/index',
  //   slug: 'webgl_geometry_shapes'
  // },
  // {
  //   name: 'Draggable Cubes',
  //   component: DraggableCubes,
  //   url: 'DraggableCubes/index',
  //   slug: 'webgl_draggable_cubes'
  // },
  // {
  //   name: 'Physics',
  //   component: Physics,
  //   url: 'Physics/index',
  //   slug: 'webgl_physics'
  // },
  // {
  //   name: 'Physics - MousePick',
  //   component: PhysicsMousePick,
  //   url: 'Physics/mousePick',
  //   slug: 'webgl_physics_mousepick'
  // },
  // {
  //   separator: true,
  //   name: 'Advanced'
  // },
  // {
  //   name: 'Without react-dom',
  //   advanced: true,
  //   page: 'advanced.html'
  // },
  // {
  //   name: 'Manual rendering',
  //   component: ManualRenderingExample,
  //   url: 'ManualRendering/index',
  //   slug: 'advanced_manual_rendering'
  // },
  // {
  //   separator: true,
  //   name: 'Benchmarks',
  // },
  // {
  //   name: 'RotatingCubes - Through React',
  //   component: BenchmarkRotatingCubes,
  //   url: 'Benchmark/RotatingCubes',
  //   slug: 'benchmarks_rotating_cubes_react'
  // },
  // {
  //   name: 'RotatingCubes - Direct Updates',
  //   component: RotatingCubesDirectUpdates,
  //   url: 'Benchmark/RotatingCubesDirectUpdates',
  //   slug: 'benchmarks_rotating_cubes_direct'
  // },
  {
    name: 'Empire Sounds',
    component: EmpireSounds,
    url: 'EmpireSounds',
    slug: 'empire_sounds'
  },
  {
    name: 'Biomes',
    component: Biomes,
    url: 'biomes',
    slug: 'biomes'
  }
];

const AlbumBrowser = ({ params }) => {
  const activeExample = params.slug && examples.find(example => example.slug === params.slug);
  return (
    <div>
      <div id="panel" className="collapsed">
        <div id="content">
          <div>
            {examples.map((example, index) => {
              if (example.separator) {
                return (<h2 key={index}>{example.name}</h2>);
              }

              if (example.advanced) {
                return (<div key={index}>
                  <a href={example.page} target="blank">{example.name}</a> (new tab)
                </div>);
              }

              return (<Link
                to={`/${example.slug}`}
                key={index}
                className={"link track-" + index}
                activeClassName="selected"
              >
                {example.name}
              </Link>);
            })}
          </div>
        </div>
      </div>
      <ExampleViewer example={activeExample} />
    </div>
  );
};

AlbumBrowser.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default AlbumBrowser;

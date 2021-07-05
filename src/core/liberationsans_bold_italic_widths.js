/* Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Widths of glyphes in LiberationSans-BoldItalic.ttf.
const LiberationSansBoldItalicWidths = [
  365, 0, 722, 1000, 1000, 722, 722, 722, 722, 722, 722, 722, 722, 722, 722,
  722, 722, 722, 722, 722, 722, 722, 722, 722, 722, 667, 722, 722, 722, 671,
  667, 667, 667, 667, 667, 667, 667, 667, 667, 723, 667, 667, 854, 722, 906,
  722, 556, 611, 778, 610, 778, 778, 778, 778, 722, 604, 354, 354, 604, 722,
  722, 278, 782, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 473, 278,
  556, 556, 722, 722, 722, 611, 611, 667, 611, 611, 611, 611, 833, 833, 722,
  722, 722, 722, 722, 722, 778, 1000, 778, 778, 778, 778, 778, 778, 778, 781,
  847, 778, 844, 778, 778, 778, 667, 822, 718, 829, 778, 722, 722, 722, 722,
  667, 667, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 625, 708, 708,
  708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708,
  708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 708, 667, 667, 667,
  667, 667, 590, 611, 611, 611, 611, 611, 778, 667, 722, 722, 722, 722, 722,
  722, 722, 722, 722, 667, 667, 930, 722, 722, 667, 944, 944, 944, 944, 944,
  667, 657, 667, 667, 667, 667, 667, 611, 611, 611, 611, 611, 556, 556, 556,
  556, 333, 333, 556, 889, 889, 1000, 722, 708, 722, 614, 722, 667, 667, 927,
  643, 719, 719, 615, 687, 833, 722, 778, 719, 667, 722, 611, 677, 781, 667,
  729, 708, 979, 989, 854, 1000, 708, 719, 1042, 729, 575, 886, 614, 719, 667,
  278, 278, 556, 1094, 1042, 854, 622, 677, 556, 619, 604, 534, 618, 556, 556,
  736, 510, 611, 611, 507, 622, 740, 604, 611, 611, 611, 556, 889, 556, 885,
  556, 646, 583, 889, 935, 707, 854, 594, 552, 865, 589, 467, 611, 469, 563,
  556, 278, 278, 278, 969, 906, 611, 507, 556, 719, 778, 611, 611, 885, 516,
  1146, 556, 620, 620, 556, 722, 333, 556, 549, 556, 556, 1000, 500, 999, 1000,
  500, 500, 500, 584, 584, 389, 975, 556, 611, 278, 280, 621, 708, 389, 389,
  333, 333, 333, 333, 280, 350, 556, 556, 333, 333, 222, 556, 556, 556, 556,
  333, 556, 578, 604, 333, 333, 656, 333, 278, 333, 222, 737, 556, 333, 611,
  556, 556, 740, 611, 400, 610, 510, 333, 333, 333, 549, 729, 708, 556, 333,
  278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 1000, 556, 1000, 556,
  611, 556, 479, 479, 584, 583, 600, 611, 611, 611, 333, 604, 333, 333, 750,
  604, 1000, 556, 834, 333, 556, 556, 333, 556, 611, 556, 611, 611, 611, 611,
  611, 333, 333, 584, 549, 556, 556, 333, 333, 611, 611, 611, 594, 604, 333,
  333, 278, 278, 278, 278, 278, 278, 556, 278, 713, 274, 604, 604, 722, 604,
  604, 1052, 278, 278, 278, 278, 278, 278, 278, 278, 556, 566, 556, 556, 278,
  278, 556, 396, 278, 479, 584, 549, 708, 556, 584, 278, 494, 278, 708, 889,
  552, 750, 333, 584, 240, 603, 584, 500, 750, 611, 611, 708, 611, 611, 556,
  333, 549, 611, 556, 556, 611, 611, 611, 611, 611, 944, 333, 611, 611, 611,
  834, 834, 611, 611, 556, 834, 834, 834, 354, 370, 365, 979, 611, 611, 611,
  611, 556, 333, 333, 494, 889, 278, 1000, 1104, 704, 712, 584, 549, 823, 773,
  611, 611, 611, 474, 500, 500, 500, 278, 278, 278, 278, 238, 389, 389, 549,
  389, 389, 737, 584, 605, 333, 708, 556, 556, 556, 556, 556, 556, 479, 556,
  556, 834, 333, 708, 664, 532, 556, 278, 1021, 531, 556, 713, 917, 333, 409,
  333, 479, 333, 558, 611, 556, 834, 834, 333, 333, 333, 1000, 990, 990, 990,
  990, 556, 611, 611, 611, 611, 611, 611, 611, 611, 556, 552, 278, 333, 333,
  333, 576, 333, 611, 333, 333, 333, 667, 719, 556, 619, 333, 333, 333, 396,
  768, 612, 167, 278, 750, 333, 611, 611, 611, 708, 591, 591, 591, 591, 611,
  611, 556, 778, 778, 778, 778, 778, 556, 450, 556, 556, 556, 556, 556, 556,
  500, 500, 500, 500, 556, 492,
];

export { LiberationSansBoldItalicWidths };
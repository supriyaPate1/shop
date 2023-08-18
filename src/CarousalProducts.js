import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./carousalproduct.css";
import { Link } from "react-router-dom";
export default function CarousalProducts() {
  return (
    <>
      <div style={{ width: "98%", margin: "auto", marginTop: "10px" }}>
        <Carousel>
          <Carousel.Item>
            <div className="carousalPro">
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/m/o/monopoly_junior_peppa_pig_edition_board_game_for_2-4_players_for_kids_ages_5_and_up_1_.jpg"
                  alt="toy"
                />
                <h5>Monopoly Junior Board Game</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/b/a/barbie_fashionistas_doll_2_for_ages_3_years_and_up_grb51_2_.jpg"
                  alt="toy"
                />
                <h5>Barbie Fashionistas Doll</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/s/k/skillmatics_stem_building_toy_buildables_marvel_iron_man_-_diy_action_toy_figures_collectibles_for_ages_8_and_up_5_.jpg"
                  alt="toy"
                />
                <h5> Toy buildables marvel Iron Man</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/n/e/nerf_elite_2.0_echo_cs-10_4_in1_blaster_24_darts_10-dart_clip_removable_stock_and_barrel_extension_3_.jpg"
                  alt="toy"
                />
                <h5>Removable dart set</h5>
                <Link to="/shop">See more</Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousalPro">
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/l/e/lego_dots_creative_designer_box_diy_craft_decoration_kit_for_ages_7_6_.jpg"
                  alt="toy"
                />
                <h5>DIY Craft Decoration Kit</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/m/o/monopoly_junior_peppa_pig_edition_board_game_for_2-4_players_for_kids_ages_5_and_up_1_.jpg"
                  alt="toy"
                />
                <h5>Monopoly Junior Board Game</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/n/e/nerf_elite_2.0_echo_cs-10_4_in1_blaster_24_darts_10-dart_clip_removable_stock_and_barrel_extension_3_.jpg"
                  alt="toy"
                />
                <h5>Removable dart set</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/h/a/hasbro_gaming_marvel_mayhem_card_game_fun_game_for_marvel_fans_ages_8_easy-to-learn_game_for_2-4_players_4_.jpg"
                  alt="toy"
                />
                <h5>Marvel Learn Game</h5>
                <Link to="/shop">See more</Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousalPro">
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/l/e/lego_dots_creative_designer_box_diy_craft_decoration_kit_for_ages_7_6_.jpg"
                  alt="toy"
                />
                <h5>DIY Carft Decoration Kit</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/s/k/skillmatics_stem_building_toy_buildables_marvel_iron_man_-_diy_action_toy_figures_collectibles_for_ages_8_and_up_5_.jpg"
                  alt="toy"
                />
                <h5>Building Marvel Game</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/m/o/monopoly_junior_peppa_pig_edition_board_game_for_2-4_players_for_kids_ages_5_and_up_1_.jpg"
                  alt="toy"
                />
                <h5>Board game</h5>
                <Link to="/shop">See more</Link>
              </div>
              <div>
                <img
                  src="https://d2s7hpbx4rtiif.cloudfront.net/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/b/a/barbie_fashionistas_doll_2_for_ages_3_years_and_up_grb51_2_.jpg"
                  alt="toy"
                />
                <h5>Barbie Doll</h5>
                <Link to="/shop">See more</Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

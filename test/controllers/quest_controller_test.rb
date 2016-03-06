require 'test_helper'

class QuestControllerTest < ActionController::TestCase
  test "should get enter" do
    get :enter
    assert_response :success
  end

end

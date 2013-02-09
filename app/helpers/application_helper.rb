module ApplicationHelper
  def new_attack_template(f)
    new_attack = Attack.new
    fields = f.fields_for(:attack, new_attack, :child_index => "new_attack") do |builder|
      render("attack_fields", :f => builder)
    end
    return fields
  end
end

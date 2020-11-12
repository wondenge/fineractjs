

import ApiClient from '../ApiClient';

/**
 * The GetGroupsTemplateStaffOptions model module.
 * @module model/GetGroupsTemplateStaffOptions
 * @version 1.0
 */
class GetGroupsTemplateStaffOptions {
    /**
     * Constructs a new <code>GetGroupsTemplateStaffOptions</code>.
     * @alias module:model/GetGroupsTemplateStaffOptions
     */
    constructor() { 
        
        GetGroupsTemplateStaffOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsTemplateStaffOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsTemplateStaffOptions} obj Optional instance to populate.
     * @return {module:model/GetGroupsTemplateStaffOptions} The populated <code>GetGroupsTemplateStaffOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsTemplateStaffOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsTemplateStaffOptions.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetGroupsTemplateStaffOptions.prototype['displayName'] = undefined;






export default GetGroupsTemplateStaffOptions;


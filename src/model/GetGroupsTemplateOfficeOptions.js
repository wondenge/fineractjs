

import ApiClient from '../ApiClient';

/**
 * The GetGroupsTemplateOfficeOptions model module.
 * @module model/GetGroupsTemplateOfficeOptions
 * @version 1.0
 */
class GetGroupsTemplateOfficeOptions {
    /**
     * Constructs a new <code>GetGroupsTemplateOfficeOptions</code>.
     * @alias module:model/GetGroupsTemplateOfficeOptions
     */
    constructor() { 
        
        GetGroupsTemplateOfficeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsTemplateOfficeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsTemplateOfficeOptions} obj Optional instance to populate.
     * @return {module:model/GetGroupsTemplateOfficeOptions} The populated <code>GetGroupsTemplateOfficeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsTemplateOfficeOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsTemplateOfficeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetGroupsTemplateOfficeOptions.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetGroupsTemplateOfficeOptions.prototype['nameDecorated'] = undefined;






export default GetGroupsTemplateOfficeOptions;


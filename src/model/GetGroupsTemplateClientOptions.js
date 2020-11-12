

import ApiClient from '../ApiClient';

/**
 * The GetGroupsTemplateClientOptions model module.
 * @module model/GetGroupsTemplateClientOptions
 * @version 1.0
 */
class GetGroupsTemplateClientOptions {
    /**
     * Constructs a new <code>GetGroupsTemplateClientOptions</code>.
     * @alias module:model/GetGroupsTemplateClientOptions
     */
    constructor() { 
        
        GetGroupsTemplateClientOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsTemplateClientOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsTemplateClientOptions} obj Optional instance to populate.
     * @return {module:model/GetGroupsTemplateClientOptions} The populated <code>GetGroupsTemplateClientOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsTemplateClientOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsTemplateClientOptions.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetGroupsTemplateClientOptions.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetGroupsTemplateClientOptions.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetGroupsTemplateClientOptions.prototype['officeName'] = undefined;






export default GetGroupsTemplateClientOptions;


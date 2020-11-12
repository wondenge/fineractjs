

import ApiClient from '../ApiClient';

/**
 * The GetFromClientStandingInstructionSwagger model module.
 * @module model/GetFromClientStandingInstructionSwagger
 * @version 1.0
 */
class GetFromClientStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromClientStandingInstructionSwagger</code>.
     * @alias module:model/GetFromClientStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromClientStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromClientStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromClientStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromClientStandingInstructionSwagger} The populated <code>GetFromClientStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromClientStandingInstructionSwagger();

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
GetFromClientStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetFromClientStandingInstructionSwagger.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetFromClientStandingInstructionSwagger.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetFromClientStandingInstructionSwagger.prototype['officeName'] = undefined;






export default GetFromClientStandingInstructionSwagger;


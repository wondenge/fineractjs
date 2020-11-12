

import ApiClient from '../ApiClient';

/**
 * The GetToClientStandingInstructionSwagger model module.
 * @module model/GetToClientStandingInstructionSwagger
 * @version 1.0
 */
class GetToClientStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetToClientStandingInstructionSwagger</code>.
     * @alias module:model/GetToClientStandingInstructionSwagger
     */
    constructor() { 
        
        GetToClientStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetToClientStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetToClientStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetToClientStandingInstructionSwagger} The populated <code>GetToClientStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetToClientStandingInstructionSwagger();

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
GetToClientStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetToClientStandingInstructionSwagger.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetToClientStandingInstructionSwagger.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetToClientStandingInstructionSwagger.prototype['officeName'] = undefined;






export default GetToClientStandingInstructionSwagger;


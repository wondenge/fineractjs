

import ApiClient from '../ApiClient';

/**
 * The GetFromClientOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetFromClientOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetFromClientOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromClientOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetFromClientOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromClientOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromClientOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromClientOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromClientOptionsResponseStandingInstructionSwagger} The populated <code>GetFromClientOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromClientOptionsResponseStandingInstructionSwagger();

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
GetFromClientOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetFromClientOptionsResponseStandingInstructionSwagger.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetFromClientOptionsResponseStandingInstructionSwagger.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetFromClientOptionsResponseStandingInstructionSwagger.prototype['officeName'] = undefined;






export default GetFromClientOptionsResponseStandingInstructionSwagger;


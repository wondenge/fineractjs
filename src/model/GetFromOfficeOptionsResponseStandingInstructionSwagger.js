

import ApiClient from '../ApiClient';

/**
 * The GetFromOfficeOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetFromOfficeOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetFromOfficeOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetFromOfficeOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetFromOfficeOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetFromOfficeOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFromOfficeOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFromOfficeOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetFromOfficeOptionsResponseStandingInstructionSwagger} The populated <code>GetFromOfficeOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFromOfficeOptionsResponseStandingInstructionSwagger();

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
GetFromOfficeOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFromOfficeOptionsResponseStandingInstructionSwagger.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetFromOfficeOptionsResponseStandingInstructionSwagger.prototype['nameDecorated'] = undefined;






export default GetFromOfficeOptionsResponseStandingInstructionSwagger;


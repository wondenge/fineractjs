  

import ApiClient from '../ApiClient';
import BodyPartMediaType from './BodyPartMediaType';
import ContentDisposition from './ContentDisposition';
import MultiPart from './MultiPart';
import ParameterizedHeader from './ParameterizedHeader';

/**
 * The BodyPart model module.
 * @module model/BodyPart
 * @version 1.0
 */
class BodyPart {
    /**
     * Constructs a new <code>BodyPart</code>.
     * @alias module:model/BodyPart
     */
    constructor() { 
        
        BodyPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BodyPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodyPart} obj Optional instance to populate.
     * @return {module:model/BodyPart} The populated <code>BodyPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BodyPart();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], Object);
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': ['String']});
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = BodyPartMediaType.constructFromObject(data['mediaType']);
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = MultiPart.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], Object);
            }
            if (data.hasOwnProperty('contentDisposition')) {
                obj['contentDisposition'] = ContentDisposition.constructFromObject(data['contentDisposition']);
            }
            if (data.hasOwnProperty('parameterizedHeaders')) {
                obj['parameterizedHeaders'] = ApiClient.convertToType(data['parameterizedHeaders'], {'String': [ParameterizedHeader]});
            }
        }
        return obj;
    }


}

/**
 * @member {Object} entity
 */
BodyPart.prototype['entity'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} headers
 */
BodyPart.prototype['headers'] = undefined;

/**
 * @member {module:model/BodyPartMediaType} mediaType
 */
BodyPart.prototype['mediaType'] = undefined;

/**
 * @member {module:model/MultiPart} parent
 */
BodyPart.prototype['parent'] = undefined;

/**
 * @member {Object} providers
 */
BodyPart.prototype['providers'] = undefined;

/**
 * @member {module:model/ContentDisposition} contentDisposition
 */
BodyPart.prototype['contentDisposition'] = undefined;

/**
 * @member {Object.<String, Array.<module:model/ParameterizedHeader>>} parameterizedHeaders
 */
BodyPart.prototype['parameterizedHeaders'] = undefined;






export default BodyPart;


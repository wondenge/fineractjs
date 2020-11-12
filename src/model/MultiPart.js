

import ApiClient from '../ApiClient';
import BodyPart from './BodyPart';
import BodyPartMediaType from './BodyPartMediaType';
import ContentDisposition from './ContentDisposition';
import ParameterizedHeader from './ParameterizedHeader';

/**
 * The MultiPart model module.
 * @module model/MultiPart
 * @version 1.0
 */
class MultiPart {
    /**
     * Constructs a new <code>MultiPart</code>.
     * @alias module:model/MultiPart
     */
    constructor() { 
        
        MultiPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiPart} obj Optional instance to populate.
     * @return {module:model/MultiPart} The populated <code>MultiPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiPart();

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
            if (data.hasOwnProperty('bodyParts')) {
                obj['bodyParts'] = ApiClient.convertToType(data['bodyParts'], [BodyPart]);
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
MultiPart.prototype['entity'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} headers
 */
MultiPart.prototype['headers'] = undefined;

/**
 * @member {module:model/BodyPartMediaType} mediaType
 */
MultiPart.prototype['mediaType'] = undefined;

/**
 * @member {module:model/MultiPart} parent
 */
MultiPart.prototype['parent'] = undefined;

/**
 * @member {Object} providers
 */
MultiPart.prototype['providers'] = undefined;

/**
 * @member {Array.<module:model/BodyPart>} bodyParts
 */
MultiPart.prototype['bodyParts'] = undefined;

/**
 * @member {module:model/ContentDisposition} contentDisposition
 */
MultiPart.prototype['contentDisposition'] = undefined;

/**
 * @member {Object.<String, Array.<module:model/ParameterizedHeader>>} parameterizedHeaders
 */
MultiPart.prototype['parameterizedHeaders'] = undefined;






export default MultiPart;

